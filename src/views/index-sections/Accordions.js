import React, { useState } from 'react';


import './Accordions.css';

import { Collapse, Button, CardBody, Card } from 'reactstrap';




function Accordions() {


    const [isOpen, setIsOpen] = useState(false);

    const questions = [
        {
            q: 'Which programming language  do I have to use?',
            a: 'You can use any programming language you are comfortable with. '
        },
        {
            q: 'Can I have teammates from different colleges or my teammate be junior or senior?',
            a: 'Yes, you can have teammates from different colleges and your teammate can be senior or junior. But every team member must be an undergraduate.'
        },
        {
            q: 'What is the Entry fee?',
            a: 'The Entry fee is Rs 1500 for a team.'
        },
        {
            q: 'Is Entry fee refundable?',
            a: 'No,  it is non-refundable.'
        },
        {
            q: 'Will there be arrangement of food and accomodation ?',
            a: 'Yes, there will be proper arrangement of food and accomodation for participants and guest speakers and sponsers.'
        },
        {
            q: 'How is winner decided?',
            a: 'It will be decided by three judges each from social , economic and technical  sector.'
        },
        {
            q: 'Should I have to bring my laptop ?',
            a: 'Yes, you should bring your own laptop because it will be difficult for us to manage it.'
        },
        {
            q: 'Is it compulsory to build the whole project within the event time?',
            a: 'Yes, you should build and successfully run the project  within  the event time.'
        },
        {
            q: 'Can I work on my project outside the event arena?',
            a: 'No, you cannot work outside the event arena.'
        },
        {
            q: 'Can I use internet working on my project?',
            a: 'Yes, you  can use .We will  provide you wifi connection.'
        }

    ];

    const boolArr = new Array(questions.length).fill(false);

    const [toggleArray, setToggleArray] = React.useState(boolArr);


    const toggle = (index) => {

        const bufferArray = [...toggleArray];
        bufferArray[index] = !toggleArray[index];
        setToggleArray(bufferArray);
    }



    console.log('here is the state', toggleArray);

    const faqs = questions.map((item, index) => {

        const toggler = toggleArray[index] ?
            (<i className="now-ui-icons ui-1_simple-delete cleanRight" ></i>) :
            (<i className="now-ui-icons ui-1_simple-add cleanRight" ></i>)


        return (
            <div key={index} className='col-md-7 faq-container' style={{ margin: 'auto' }}  >
                <Button onClick={() => { toggle(index) }} style={{ marginBottom: '0px', width: '100%', backgroundColor: "#2CA8FF", textAlign: 'left' }}>
                    {toggler}

                    {item.q}</Button>
                <Collapse isOpen={toggleArray[index]}>
                    <Card>
                        <CardBody>
                            {item.a}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    })

    return faqs
}

export default Accordions
