<script>
    import { page } from '$app/stores'

    console.log(page)

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    let currentPage = '';

function setCurrentPage(page) {
    currentPage = page;
}
</script>

<header>
    <nav class="bg-white border-red-900 px-4 lg:px-6 py-2.5">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a on:click={() => setCurrentPage('Home')} href="/" class="flex items-center">
                <img src="../favicon.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap">Usermanagement</span>
            </a>
            <div class="flex items-center lg:order-2">
                <!-- Not logged in -->
                {#if !$page.data.user}
                    <a on:click={() => setCurrentPage('Login')} href="/login" class="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Login</a>
                    <a on:click={() => setCurrentPage('Signup')} href="/signup" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Signup</a>
                {/if}

                <!-- Logged in -->
                {#if $page.data.user}
                <form action="/logout" method="POST">
                    <button type="submit" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Logout<button>
                </form>
                {/if}

                <button on:click={toggleMenu} data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="{isMenuOpen ? '' : 'hidden'} w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <svg class="{!isMenuOpen ? '' : 'hidden'} w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="{isMenuOpen ? '' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a on:click={() => setCurrentPage('Home')} href="/" class={`block py-2 pr-4 pl-3 ${currentPage === 'Home' ? 'text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700' } lg:p-0`}>Home</a>
                    </li>
                    <!-- Logged in -->
                    {#if $page.data.user}
                    {#if $page.data.user.role_id == 1}
                    <li>
                        <a on:click={() => setCurrentPage('Users')} href="/users" class={`block py-2 pr-4 pl-3 ${currentPage === 'Users' ? 'text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700' } lg:p-0`}>Users</a>
                    </li>
                    {/if}
                    <li>
                        <a on:click={() => setCurrentPage('User')} href="/users/{$page.data.user.uid}" class={`block py-2 pr-4 pl-3 ${currentPage === 'User' ? 'text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700' } lg:p-0`}>User</a>
                    </li>
                    {/if}
                </ul>
            </div>
        </div>
    </nav>
</header>