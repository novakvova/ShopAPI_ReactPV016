using DAL.Entities;
using DAL.Interfaces;
using System.Reflection.Metadata.Ecma335;

namespace DAL.Repositories
{
    public class CategoryRepository : GenericRepository<CategoryEntity>,
        ICategoryRepository
    {
        public CategoryRepository(AppEFContext context) : base(context)
        {
        }

        public IQueryable<CategoryEntity> Categories => GetAll();
    }
}
