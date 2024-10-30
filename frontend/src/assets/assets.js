import cart from './cart.png'
import logo from './logo.png'
import menu from './menu.png'
import photo from './photo.jpg'
import photo2 from './photo2.jpg'
import photo3 from './photo3.jpg'
import photo4 from './photo4.jpg'
import photo5 from './photo5.jpg'
import picture from './picture.jpg'
import picture2 from './picture2.jpg'
import picture3 from './picture3.jpg'
import picture4 from './picture4.jpg'
import picturea from './picturea.jpg'
import pictureb from './pictureb.jpg'
import picturec from './picturec.jpg'
import pictured from './pictured.jpg'
import video1 from './video1.mp4'
import men1 from './men1.jpg'
import men2 from './men2.jpg'
import men3 from './men3.jpg'
import men4 from './men4.jpg'
import men5 from './men5.jpg'


export const assets ={
    logo,
    cart,
    menu,
}
export const products =[
    {
        _id: "A",
        name: "Red allover Suit",
        description: "Discover the timeless elegance of traditional Punjabi fashion with our exclusive collection of red Punjabi suits",
        price: 100,
        image: [photo],
        category: "Women",
        SubCategory: "Designer Suits",
        sizes: [ "S", "M", "L"],
        date: 17166343454448,
        bestseller: true
    },
    {
        _id: "B",
        name: "Namaskar kurta for mens",
        description:"Perfect Blue kurta for party. it is made of fine cotton fabric",
        price: 50,
        iamge: [men1,men2,men3,men4,men5],
        category: "Men",
        SubCategory: "All Over",
        sizes: ["S", "M", "L"],
        date: 1716621345448,
        bestseller: true

    }
]
