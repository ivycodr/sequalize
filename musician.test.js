const {db} = require('./db');
const {Musician} = require('./musician')



describe("Testing the database musician", () => {

    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

   
    test("to see if database connection", async()=> {
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }

    })

    test("select using the where clause", ()=> {
        const musicians = Musician.findAll({
            where: {
              instrument: 'guitar'
            }
          });
        
          musicians.then((res) => res.length)
          .catch((err) => console.error(err));
      
        
    })
    
    
    test("testing create musician", async () => {
        const musician = await Musician.create({ name: 'Ronalds', instrument: 'guitar' })
        expect(musician.id).toBe(1)

    })

    test("testing create musician", async () => {
        const musician = await Musician.create({ name: 'Ronalds', instrument: 'guitar' })
        expect(musician.name).toBe('Ronalds');

    })

    test("testing create musician", async () => {
        const musician = await Musician.create({ name: 'Ronalds', instrument: 'guitar' })
        expect(musician.instrument).toBe('guitar');

    })

})