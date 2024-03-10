import { useState } from 'react'
import './BookCard/BookCard.css'
import { BookCard } from './BookCard/BookCard.jsx'

const books = [
  {
    title: 'El Imperio Final',
    description: 'Es el primer libro de la saga Nacidos de la Bruma. La historia se centra en un joven campesino llamado Vin, que descubre que tiene habilidades alománticas, y en Kelsier, el mejor ladrón de la ciudad de Luthadel. Juntos, intentarán derrocar al Lord Legislador, el gobernante inmortal del Imperio Final.',
    read: true,
    image: '../public/books/libro1.jpg'
  },
  {
    title: 'El Pozo de la Ascensión',
    description: 'Es el segundo libro de la saga Nacidos de la Bruma. La historia se centra en Vin y Elend, que intentan reconstruir el mundo tras la caída del Lord Legislador. Sin embargo, un nuevo enemigo, oculto en las sombras, amenaza con destruir todo lo que han construido.',
    read: true,
    image: '../public/books/libro2.jpg'
  },
  {
    title: 'El Héroe de las Eras',
    description: 'Es el tercer libro de la saga Nacidos de la Bruma. La historia se centra en Vin y Elend, que intentan descubrir la verdad sobre el origen de los kandra y los koloss. Sin embargo, una nueva amenaza, mucho más poderosa que el Lord Legislador, se cierne sobre el mundo.',
    read: true,
    image: '../public/books/libro3.jpg'
  },
  {
    title: 'Aleación de Ley',
    description: 'Es el cuarto libro de la saga Nacidos de la Bruma. La historia se centra en Wax, un noble que intenta mantener el orden en la ciudad de Elendel. Sin embargo, una serie de extraños asesinatos amenaza con desestabilizar la ciudad, y Wax deberá descubrir la verdad antes de que sea demasiado tarde.',
    read: false,
    image: '../public/books/libro4.jpg'
  },
  {
    title: 'Sombras de Identidad',
    description: 'Es el quinto libro de la saga Nacidos de la Bruma. La historia se centra en Wax, que intenta descubrir la verdad sobre la extraña figura que ha aparecido en la ciudad de Elendel. Sin embargo, la verdad que descubrirá cambiará su vida para siempre.',
    read: false,
    image: '../public/books/libro5.jpg'
  },
  {
    title: 'Brazales de Duelo',
    description: 'Es el sexto libro de la saga Nacidos de la Bruma. La historia se centra en Wax, que intenta descubrir la verdad sobre la extraña figura que ha aparecido en la ciudad de Elendel. Sin embargo, la verdad que descubrirá cambiará su vida para siempre.',
    read: false,
    image: '../public/books/libro6.jpg'
  },
  {
    title: 'El metal perdido',
    description: 'Es el séptimo libro de la saga Nacidos de la Bruma. La historia se centra en Wax, que intenta descubrir la verdad sobre la extraña figura que ha aparecido en la ciudad de Elendel. Sin embargo, la verdad que descubrirá cambiará su vida para siempre.',
    read: false,
    image: '../public/books/libro7.jpg'
  },
  {
    title: 'Elantris',
    description: 'Es el primer libro del Cosmere. La historia se centra en Raoden, el príncipe de Arelon, que despierta un día para descubrir que ha sido maldito con la enfermedad de Elantris. Sin embargo, la enfermedad no es lo que parece, y Raoden deberá descubrir la verdad antes de que sea demasiado tarde.',
    read: true,
    image: '../public/books/libro8.jpg'
  }
]

function App() {
  const [ischecked, setIsChecked] = useState(true);

  return (
    <>
      <h1>Mi primer componente</h1>

      <input onChange={() => setIsChecked(!ischecked)} type="checkbox" checked = {ischecked}/> Leidos

      {
        ischecked ? books.filter((book) => book.read).map((book) => {
          return <BookCard title={book.title} description={book.description} read={book.read} image={book.image} />
        }) : books.filter((book) => !book.read).map((book) => {
          return <BookCard title={book.title} description={book.description} read={book.read} image={book.image} />
        })
      
      }

    </>
  )
}

export default App