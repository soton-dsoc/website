import { Input, Select, InputWrapper, TextInput, Chips, Chip } from '@mantine/core'
import { useState } from 'react'
import './Form.css'

function Form() {

    const [studyAreas, setStudyArea] = useState(['Computer Science', 'Electronics', 'Business', 'Economics', 'Law'])

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

            <InputWrapper
                label="Are you familiar with any of these concepts?"
                description="Select all you know"
            >
                <Chips multiple>
                    <Chip value="react">Bitcoin</Chip>
                    <Chip value="ng">Ethereum</Chip>
                    <Chip value="svelte">Smart contracts</Chip>
                    <Chip value="vue">Solidity</Chip>
                    <Chip value="vue">OpenSea</Chip>
                </Chips>
            </InputWrapper>
        </div>
    )
}

export default Form