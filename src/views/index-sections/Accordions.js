import React, { useState } from 'react';


import './Accordions.css';

import { Collapse, Button, CardBody, Card } from 'reactstrap';




function Accordions() {


    const [isOpen, setIsOpen] = useState(false);

    const questions = [
        {
            q: 'How many members can I have in my team?',
            a: 'Each team should consist of 2 or 3 members.'
        },
        {
            q: 'Can I work on the project before the event?',
            a: 'No, you can\'t but you can research about it. And if we find anything which is used in project that was already done or built before, you will be dis-qualified.'
        },

        {
            q: 'Can I have teammates from different colleges or my teammate be junior or senior?',
            a: 'Yes, you can have teammates from different colleges and your teammate can be senior or junior. But every team member must be an undergraduate or a high school student.'
        },
        {
            q: 'What is the Entry fee?',
            a: 'The Entry fee is Rs 500 per person.'
        },
        {
            q: 'Is Entry fee refundable?',
            a: 'No,  it is non-refundable.'
        },
        {
            q: 'Will there be arrangement of food and accommodation ?',
            a: 'Yes, there will be proper arrangement of food and accommodation for participants and guest speakers in venue if they are from out of Pokhara valley.'
        },
        {
            q: 'How is winner decided?',
            a: 'It will be decided by three judges each from social , economic and technical  sector.'
        },
        {
            q: 'When is the deadline for  proposal submission?',
            a: 'The deadline for submission of proposal is 30th Mangsir.'
        },
        {
            q: 'Is it compulsory to build the whole project within the event time?',
            a: 'Yes, A working prototype has to be built within the time frame.'
        },
        {
            q: 'Can I work on my project outside the event arena?',
            a: 'No, you cannot work outside the event arena.'
        },


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
