import {Button} from "@chakra-ui/react"
function Pagination({ total,current,changePage}) 
{
      console.log(total,current,changePage)
    let pages = new Array(10).fill(0).map((el, i) => (
      <Button onClick={() => changePage(i + 1)} disabled={current === i + 1} key={i + 1} color="blue">{i + 1}</Button>
    ));
  
    return <div>{pages}</div>;
  }
  
  export default Pagination;