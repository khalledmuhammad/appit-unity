import one from './one.svg';
import two from './two.svg';
import three from './three.svg';


const info = () => {
    return(
        {
        //h2
        stripTitle: 'How and where to Start?',
        //h2 
        cards: [
        {
            id: 1,
            title: "Contact us via phone or in-person",
            icon: one,
            testimonial:'We have tried them. We are happy with punctuality. It is hard to find such honest indivduals'
        },
        {
            id: 2,
            title: "Choose your developers or let us help",
            icon: two,
            testimonial:'We have tried them. We are happy with punctuality. It is hard to find such honest indivduals'

        },
        {
            id: 3,
            title: "Pay ONLY after you are happy",
            icon: three,
            testimonial:'We have tried them. We are happy with punctuality. It is hard to find such honest indivduals'

        }
    ], 
    footerDescription:'* Regardless of the size of your project, you are the one who initially decides how many specialists developers you need to hire on the project. You can always add new developers to your team or reduce the team as necessary.It is all done quickly and without any side cost.',
}
)
}
export default info;