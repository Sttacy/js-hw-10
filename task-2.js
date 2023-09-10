const car = {
  mark: "Tesla",
  model: "model 3",
  year: 2014,
  speed: 100,
  showInfo() {
    console.log(
      `Марка: ${this.mark} ,  Модель: ${this.model} , Рік випуску: ${this.year}`
    );
  },
  showTime() {
    const showTime = this.distance / this.speed;
    console.log(
      `Автомобіль ${this.mark}, марки ${this.model} дістанеться міста ${this.city} за ${showTime} годин`
    );
  },
};

const location = {
  city: "Kiev",
  distance: 1000,
};

const joinedObject = { ...car, ...location };
const ShowTimeInfo = car.showTime.bind(joinedObject);

ShowTimeInfo();
