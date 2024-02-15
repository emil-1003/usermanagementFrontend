<script>
  export let data;
</script>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
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
            <tr class="bg-white">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {data.user.id}
                </th>
                <td class="px-6 py-4">
                    {data.user.name}
                </td>
                <td class="px-6 py-4">
                    {data.user.email}
                </td>
                <td class="px-6 py-4">
                    {data.user.role_id}
                </td>
                <td class="px-6 py-4">
                  {data.user.created_at}
              </td>
              <td class="px-6 py-4">
                {data.user.updated_at}
              </td>
              <td class="px-6 py-4 text-right">
                  <a href="/users/{data.user.id}/edit" class="font-medium text-blue-600 hover:underline">Edit</a>
              </td>
              <td class="px-6 py-4 text-right">
                  
                  <form action="?/deleteUser" method="POST">
                      <input type="hidden" name="userID" value={data.user.id}>  
                      <button type="submit" class="font-medium text-red-600s hover:underline">Delete<button>
                  </form>
  
              </td>
            </tr>
        </tbody>
    </table>
  </div>
  