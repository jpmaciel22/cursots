// Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
}

const documento: Documento = {
  titulo: 'A grande aventura de René Guenon',
  texto: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, ipsum at scelerisque malesuada, tellus ligula mattis magna, quis placerat ipsum diam imperdiet sem. Morbi venenatis augue sit amet ligula venenatis pretium vitae vitae massa. Mauris semper mi ut nisl congue, hendrerit suscipit elit pulvinar. Morbi aliquam, neque vel dapibus fermentum, dui ex egestas urna, id elementum purus elit eu enim. Mauris laoreet elementum nunc. Etiam elit est, pretium quis tellus id, aliquam vehicula dui. Curabitur iaculis lectus eros, eu tincidunt lectus mollis in. Phasellus tincidunt sed est ut aliquet. Quisque vitae laoreet mi. Ut vestibulum urna condimentum dui commodo volutpat a vitae est. Aliquam tellus nisi, faucibus nec dolor non, gravida ullamcorper erat. Nunc rhoncus porta nibh at molestie.',
  data: new Date('04/13/1986'),
}

console.log(documento.data?.toDateString() ?? 'Nenhuma data fornecida.')
