<script>
    let jwt = '';

    let users = [];
  
    const handleSubmit = async () => {
      const formData = {
        jwt
      };
  
      try {
        const response = await fetch('http://localhost:8585/api/v1/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+jwt,
          }
        });
  
        if (response.ok) {
          // Handle successful signup
          console.log('Signup successful');
          users = await response.json();
          console.log(users)
        } else {
          // Handle signup error
          console.error('Signup failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  </script>

<section>
    <div class="flex flex-col items-center justify-center px-6 py-8 mt-8 lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src="favicon.png" alt="logo">
            Users    
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    JWT
                </h1>
                <form class="space-y-4 md:space-y-6" action="#" on:submit|preventDefault={handleSubmit}>
                    <div>
                        <label for="jwt" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">JWT</label>
                        <input type="text" name="jwt" id="jwt" bind:value={jwt} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jwt" required="">
                    </div>
                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Get All Users</button>
                </form>
            </div>
        </div>
    </div>
</section>



<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" class="px-6 py-3">
                  ID
              </th>
              <th scope="col" class="px-6 py-3">
                  Name
              </th>
              <th scope="col" class="px-6 py-3">
                  Email
              </th>
              <th scope="col" class="px-6 py-3">
                  Role ID
              </th>
              <th scope="col" class="px-6 py-3">
                Created at
            </th>
            <th scope="col" class="px-6 py-3">
                Updated at
            </th>
              <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Delete</span>
            </th>
          </tr>
      </thead>
      <tbody>
        {#each users as user}
          <tr class="bg-white dark:bg-gray-800">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.id}
              </th>
              <td class="px-6 py-4">
                  {user.name}
              </td>
              <td class="px-6 py-4">
                  {user.email}
              </td>
              <td class="px-6 py-4">
                  {user.role_id}
              </td>
              <td class="px-6 py-4">
                {user.created_at}
            </td>
            <td class="px-6 py-4">
              {user.updated_at}
            </td>
              <td class="px-6 py-4 text-right">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</a>
            </td>
          </tr>
          {/each}
      </tbody>
  </table>
</div>





