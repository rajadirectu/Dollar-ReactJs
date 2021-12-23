using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public interface IUserRepository
    {
        UserLoginDetails ValidateUserDetails(UserLoginDetails userLoginDetails);
    }
}
