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
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            input: ""
        })
        setFoundSkills([]);

        const jobInput = formData.input;

        Object.entries(skillData.skills).forEach(([skillName]) => {
            if (jobInput.includes(skillName)) {
                setFoundSkills((prevSkills) => [...prevSkills, skillName]);
            }
        });
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
        console.log("Saved!")
        foundSkills.forEach((element) => {
            for (let skillName in skillData.skills) {
                if (element === skillName) {
                    console.log("Added 1 to " + skillName)
                    skillData.skills[skillName].count = (parseInt(skillData.skills[skillName].count) + 1).toString();
                }
            }
        });
        writeToFile()
    }

    const writeToFile = () => {
        console.log(skillData)
    }

    const handleRefresh = () => {
        window.location.reload();
    }


    return (
        <div className='p-5'>
            <h3 className='text-center mb-3'>Home</h3>


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
                    <h3 className='mt-3'>Skills Found!</h3>
                    <div className='w-50 mb-4 mt-3'>
                        <h4>Save these skills?</h4>
                        <Row className='confirm-btns mb-3'>
                            <Col >
                                <Button onClick={handleSave} className='yes' type="submit">Yes</Button>
                            </Col>
                            <Col>
                                <Button onClick={handleRefresh} className='no' type="submit">No</Button>
                            </Col>
                        </Row>
                    </div>

                </>
            ) : (
                <>
                    {noResults && (
                        <Container className="no-results mb-3">
                            <Card className="w-100">
                                <Card.Title className="p-3">No results found!</Card.Title>
                            </Card>
                        </Container>
                    )}
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