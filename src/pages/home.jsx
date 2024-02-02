import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import skillData from '../data/data.json';
import '../App.css'
import SkillBtn from '../components/skillBtn';

function Home() {

    //handle submission
    const [formData, setFormData] = useState({
        input: ""
    });
    const [noResults, setNoResults] = useState(false);
    const [foundSkills, setFoundSkills] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            input: ""
        })
        setFoundSkills([])

        const jobInput = formData.input;

        Object.values(skillData.skills).forEach(skill => {
            if (jobInput.includes(skill.name)) {
                setFoundSkills((prevSkills) => [...prevSkills, skill.name]);
            }
        })

    };

    // checks if there are any results returned
    useEffect(() => {
        if (foundSkills.length === 0) {
            setNoResults(true);
        } else {
            setNoResults(false);
        }
    }, [foundSkills]);

    // if save is true, then update the json file count of each named skill by 1
    const handleSave = () => {

    }

    return (
        <div className='p-5'>
            <h3 className='text-center mb-3'>Home</h3>

            {noResults && (
                <Container className="no-results mb-3">
                    <Card className="w-100">
                        <Card.Title className="p-3">No results found!</Card.Title>
                    </Card>
                </Container>
            )}


            {foundSkills.length > 0 ? (
                <>
                    {foundSkills.map((skill) => {
                        return (
                            <SkillBtn
                                key={skill}
                                skillName={skill}
                            />
                        );
                    })}
                    {/* ask to save */}


                </>
            ) : (
                <>
                </>
            )}


            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">

                    <Row>
                        <label className='mb-2' htmlFor='input'>
                            Paste Job Here
                        </label>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <textarea
                                className="form-control"
                                id="input"
                                name="input"
                                value={formData.input}
                                onChange={handleChange}
                                rows="4"
                                required
                            ></textarea>
                        </Col>
                    </Row>
                    <div className='mt-3'>
                        <Button type="submit">
                            Submit
                        </Button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Home;