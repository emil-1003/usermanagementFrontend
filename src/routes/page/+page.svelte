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
            'Authorization': jwt,
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

{#if users}
  <ul>
    {#each users as user}
      <li>{user.name}</li>
    {/each}
  </ul>
{/if}

<section class="bg-gray-50">
    <div class="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
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
                        <input type="text" name="jwt" id="jwt" bind:value={jwt} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bearer ey...." required="">
                    </div>
                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Get All Users</button>
                </form>
            </div>
        </div>
    </div>
  </section>
