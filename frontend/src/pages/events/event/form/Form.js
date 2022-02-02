import { Input, Select, InputWrapper, TextInput, Chips, Chip } from '@mantine/core'
import { useState } from 'react'
import './Form.css'

function Form(props) {

    const [studyAreas, setStudyArea] = useState(['Computer Science', 'Electronics', 'Business', 'Economics', 'Law'])

    console.log(props.questions)


    return (
        <div className='Form'>
            <TextInput className='form-input'
                required
                label="Your name"
                placeholder="Tim Berners-Lee"
            />


            <TextInput className='form-input'
                required
                label="Your email"
                placeholder="mp3u21@soton.ac.uk"
            />


            <Select className='form-input'
                required
                label="How did you hear about this event?"
                placeholder="Pick one"
                data={['Poster', 'Email', 'Social media', 'Word of mouth']}
            />


            <Select className='form-input'
                required
                label="What is your field of study?"
                placeholder="Pick one or type"
                description="If your area of study is not listed, type it in"
                searchable
                creatable
                getCreateLabel={(query) => `${query}`}
                onCreate={(query) => setStudyArea((studyAreas) => [...studyAreas, query])}
                data={studyAreas}
            />

            {
                props.questions !== null && props.questions.map((q, i) =>
                    <InputWrapper
                        label={q.text}
                        description={q.description}
                        key={i}
                    >
                        {
                            q.type == "Chips" &&
                            <Chips multiple style={{ fontWeight: 400 }}>

                                {
                                    q.options.map((o, j) =>
                                        <Chip value={o} key={j}>{o}</Chip>
                                    )
                                }
                            </Chips>
                        }
                    </InputWrapper>
                )
            }

            <div className='event-register'>
                <div className='event-button'>Register</div>
            </div>
        </div>
    )
}

export default Form