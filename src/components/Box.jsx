import {name, sayName} from '../modules/MyModule';

//컴포넌트 만들기
function Box() {
  const result = sayName('wow!');
  console.log(result);
 
  return (
    <>
      <h1>title</h1>
      <div className='box'>
        box {name}
      </div>
    </>    
  )

}

export default Box;