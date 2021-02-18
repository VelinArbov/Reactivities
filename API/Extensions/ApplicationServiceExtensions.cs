using System.Collections.Generic;
using Application.Activities;
using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions 
    {
        public static IServiceCollection AddApplicationServices( this IServiceCollection services, IConfiguration _config)
        {
            services.AddDbContext<DataContext>(options =>
           {
               options.UseSqlServer(_config.GetConnectionString("DefaultConnection"));

           });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
            });
                services.AddCors();
                services.AddAutoMapper(typeof(MappingProfiles).Assembly);
                services.AddMediatR(typeof(List.Handler).Assembly);


                return services;
        }
    }
}