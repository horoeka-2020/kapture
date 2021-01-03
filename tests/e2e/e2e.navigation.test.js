import 'regenerator-runtime/runtime'
const playwright = require('playwright')

// const connection = require('../../server/db/connection.js')
// const environment = process.env.NODE_ENV

// Run this before all tests
// beforeAll(async () => {
//   connection.migrate.latest()
//   browser = await playwright.chromium.launch({
//     headless: true
//   })
// })

// // Run this before each test
// beforeEach(async () => {
//   connection.seed.run()
//   page = await browser.newPage()
// })

// // Run this after all tests
// afterAll(async () => {
//   connection.destroy()
//   await browser.close()
// })

// // Run this after each test
// afterEach(async () => {
//   await page.close()
// })

let browser
let page
// Declare app variable
const app = 'http://localhost:3000/'
// const signIn = 'http://localhost:3000/#/signin'
// const myRegister = 'http://localhost:3000/#/register'
const institues = 'http://localhost:3000/#/institutions'
const map = 'http://localhost:3000/sightings'

beforeAll(async () => {
    browser = await playwright.chromium.launch({
      headless: true
    //   slowMo: 2000
    })
  })
  beforeEach(async () => {
    page = await browser.newPage()
  })
  afterAll(async () => {
    await browser.close()
  })
  afterEach(async () => {
    await page.close()
  })


  
  test('1. User can navigate to welome page', async () => {
    await page.goto(app)
  
    const url = page.url()
  
    expect(url).toBe('http://localhost:3000/welcome')
  },9999)

  test('2. User is able to navigate to profile component', async () => {
    await page.goto(app)
  
    await Promise.all([
      page.click('text="Profile"')
    ])
  
    const url = page.url()
  
    expect(url).toBe('http://localhost:3000/profile')
  }, 20000)
  
  test('3. User is able to navigate to gallery component', async () => {
    await page.goto(app)
  
    await Promise.all([
      page.click('text="Gallery"')
    ])
  
    const url = page.url()
  
    expect(url).toBe('http://localhost:3000/gallery')
  }, 20000)
 
  test('4. User is able to navigate to quiz component', async () => {
    await page.goto(app)
  
    await page.click('text="Quiz"')

    const url = page.url()
  
    expect(url).toBe('http://localhost:3000/quiz')
  },9999)
 
 test('5. User is able to navigate to sightings component', async () => {
     await page.goto(app)

     await Promise.all([
        page.click('text="Sightings"')
      ])

      const url = page.url()
  
    expect(url).toBe('http://localhost:3000/sightings')
  }, 20000)

  test('6. User is able to navigate to contact component', async () => {
    await page.goto(app)

    await Promise.all([
       page.click('text="Contact"')
     ])

     const url = page.url()
 
   expect(url).toBe('http://localhost:3000/contact')
 }, 20000)

 test('7. User is able to navigate to about component', async () => {
  await page.goto(app)

  await Promise.all([
     page.click('text="About"')
   ])

   const url = page.url()

 expect(url).toBe('http://localhost:3000/about')
}, 20000)
