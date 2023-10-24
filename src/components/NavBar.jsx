import "./NavBar.css"
// prettier-ignore
const NavBar = ({ count, setCount, list }) => {
  return (
    <>
      {list.map((item, index) => (
        <button
          key={item.name}
          onClick={() => {setCount((count = index))}}>
          {item.name}
        </button>
      ))}
    </>
  )
}
export default NavBar

/* <div className="container-button">
{count > 0 && (<button onClick={() => {setCount(count - 1)}}>
    Précédent</button>)}
{count < list.length - 1 && (<button onClick={() => {setCount(count + 1)}}>
    Suivant</button>)}
</div> */
