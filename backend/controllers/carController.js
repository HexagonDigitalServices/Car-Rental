// CREATE CAR
    const {
      make, model,  dailyRate,  category, description,
      year, color, seats, transmission, fuelType, mileage, status
    } = req.body;

    const car = new Car({
      make,
      model,
      year: year ? Number(year) : undefined,
      color: color || '',
      category: category || 'Sedan',
      seats: seats ? Number(seats) : 4,
      transmission: transmission || 'Automatic',
      fuelType: fuelType || 'Gasoline',
      mileage: mileage ? Number(mileage) : 0,
      dailyRate: Number(dailyRate),
      status: status || 'available',
      image: imageFilename || '',
      description: description || ''
    });


// GET CARS
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 12;
    const search = req.query.search || '';
    const category = req.query.category || '';
    const status = req.query.status || '';

    const query = {};
    if (search) {
      query.$or = [
        { make: { $regex: search, $options: 'i' } },
        { model: { $regex: search, $options: 'i' } },
        { color: { $regex: search, $options: 'i' } }
      ];
    }


// UPDATE CARS
    const fields = ['make','model','year','color','category','seats','transmission','fuelType','mileage','dailyRate','status','description'];


      ['year','seats','mileage','dailyRate']
