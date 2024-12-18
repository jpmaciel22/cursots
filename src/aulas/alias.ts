type Idade = number;
type Pessoa = {
  nome: string,
  idade: Idade,
  salario: number,
  favoriteGame?: FavGame,

};
type ImmSim = 'Deus Ex' | 'Arx Fatalis' | 'System Shock' | 'Dishonored';
type RPG = 'Chrono Trigger' | 'Final Fantasy' | 'Enchant Farm' | 'Disco Elysium';
type FavGame = ImmSim | RPG;

const p1: Pessoa = {
  nome: 'Joao',
  idade: 19,
  salario: 0,
  favoriteGame: 'Dishonored'
};

// ---------------------- Interseção abaixo:
type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'A' | 'D'
type Interseção = AB & AC & AD // = "A"

type TemNome  = {nome: string}
type TemIdade = {idade: number}
type Pessoinha = TemNome & TemIdade
