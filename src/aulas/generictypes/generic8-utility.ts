type CatName = "miffy" | "boris" | "mordred";
type AnimalName = string;

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
const dogs: Record<AnimalName,CatInfo> = {
  pimenta: {age: 4, breed: 'shih tzu'},
}

console.log(cats.boris)
