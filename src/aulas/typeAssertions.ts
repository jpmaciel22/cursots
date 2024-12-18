const body1 = document.querySelector('body');
if(body1) body1.style.backgroundColor = 'red';

const body2 = document.querySelector('body')!; // non-null assertion
  body2.style.backgroundColor = 'red';

const body3 = document.querySelector('body') as HTMLBodyElement; // type assertion
body3.style.backgroundColor = 'red';
