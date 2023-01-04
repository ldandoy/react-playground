import {useEffect, useRef, useState} from 'react'

const Animals = () => {
  const inputRef = useRef(null)

  useEffect (() => {
    inputRef.current.focus();
  }, [])

  const idRef = useRef(1)
  const [animals, setAnimals] = useState([
    {id: idRef.current++, name:"Lion"},
    {id: idRef.current++, name:"Eagle"}
  ])

  const onAddAnimal = () => {
    setAnimals([
      ...animals,
      {id: idRef.current++, name: inputRef.current.value}
    ])

    inputRef.current.value = ""
  }

  return ( <>
    <div className='title'>Animals</div>
    <div className='mb-4'>
      {animals.map(animal => <div key={animal.id}>{animal.id} - {animal.name}</div>)}
    </div>
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onAddAnimal}>Add Animal</button>
    </div>
  </>)
}

export default Animals