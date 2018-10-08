using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;

namespace AuthSample
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.Audience = Configuration["oidc:audience"];
                    /*
                     The ADFS implementation of OpenID Connect does not follow specification and differentiates
                     between the issuer and the ADFS only access token issuer. This forces us to specify the 
                     issuer explicitly instead of getting it from the discovery endpoint. Specifying any part of 
                     the configuration explicitly skips getting any information from the discovery endpoint; this 
                     in turn forces us to specify the signing keys explicitly as well.
                    */
                    options.Configuration = new OpenIdConnectConfiguration
                    {
                        Issuer = Configuration["oidc:issuer"]
                    };
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        IssuerSigningKey = new JsonWebKey(Configuration["oidc:issuerSigningKey"])
                    };
                });

            services
                .AddMvcCore()
                .AddAuthorization()
                .AddFormatterMappings()
                .AddDataAnnotations()
                .AddJsonFormatters()
                .AddCors()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
                app.UseHttpsRedirection();
            }

            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod());

            app.UseAuthentication();

            app.UseMvc();
        }
    }
}
