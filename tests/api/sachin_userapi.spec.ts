
import { test, expect, request as playwrightRequest } from '@playwright/test'

const Auth_token = '8dd4953d8dc2f92813db276cd130626ad9d3507802dab7a8beed7f879cbfb107'

test('get user test', async ({ request }) => {
    const response = await request.get('https://gorest.co.in/public/v2/users', {
        headers: {
            Authorization: `Bearer ${Auth_token}`,
            'Content-Type': 'application/json'
        }
    })
 expect(response.status()).toBe(200)
   expect(response.ok()).toBeTruthy()
    const body = await response.json()

    console.log(body);
    console.log(response.status());
    console.log(response.statusText());
     console.log(response.headers());

    
    //expect(Array.isArray(body)).toBeTruthy()
})


test('post user test', async ({ request }) => {

    let userdata={
    name: 'james',
    email: `automation_${Date.now()}@test.com`,
    gender: 'male',
    status: 'active'

    }
    const response = await request.post('https://gorest.co.in/public/v2/users', {
        headers: {
            Authorization: `Bearer ${Auth_token}`,
            'Content-Type': 'application/json',
          
        },
          data:userdata
    })

   expect(response.ok()).toBeTruthy()
   expect(response.status()).toBe(201)
    const body = await response.json()

    console.log(body);
    console.log(response.status());
    console.log(response.statusText());
     console.log(response.headers());

    
    //expect(Array.isArray(body)).toBeTruthy()
})


test('update user test', async ({ request }) => {

    let userdata={
    name: 'james',
    email: `automation_${Date.now()}@test.com`,
    gender: 'male',
    status: 'inactive'

    }
    const response = await request.put('https://gorest.co.in/public/v2/users/8577091', {
        headers: {
            Authorization: `Bearer ${Auth_token}`,
            'Content-Type': 'application/json',
          
        },
          data:userdata
    })

   expect(response.ok()).toBeTruthy()
    const body = await response.json()

    console.log(body);
    console.log(response.status());
    console.log(response.statusText());
     console.log(response.headers());

    
    //expect(Array.isArray(body)).toBeTruthy()
})


test('Delete user test', async ({ request }) => {

    let userdata={
    name: 'james',
    email: `automation_${Date.now()}@test.com`,
    gender: 'male',
    status: 'inactive'

    }
    const response = await request.delete('https://gorest.co.in/public/v2/users/8577084', {
        headers: {
            Authorization: `Bearer ${Auth_token}`,
            'Content-Type': 'application/json',
          
        },
         
    })

   //expect(response.ok()).toBeTruthy()
   // const body = await response.json()

   // console.log(body);
    console.log(response.status());
    console.log(response.statusText());
     console.log(response.headers());

    
    //expect(Array.isArray(body)).toBeTruthy()
})