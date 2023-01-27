using DAL.Interfaces;
using Infrastructure.Interfaces;
using Infrastructure.Models.Caterories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryService;
        public CategoryService(ICategoryRepository categoryService)
        {
            _categoryService = categoryService;
        }
        public async Task<int> Create(CategoryCreateVM model)
        {
            return 0;
        }
    }
}
