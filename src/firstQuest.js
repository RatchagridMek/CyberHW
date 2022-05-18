import React, { useState } from 'react'
import { Container, Card, Row, Text, Button } from "@nextui-org/react";
import { Input, Spacer } from "@nextui-org/react";

export default function FirstQuest() {


    const [Answer, setAnswer] = useState('')
    const [isCorrect, setIscorrect] = useState(false)

    const handleChange = (e) => {
        setAnswer(e.target.value)
    }

    const handleSubmit = () => {
        let show = document.getElementById('checkAnswer');
        if(show.classList.contains('d-none')) {
            show.classList.toggle('d-none');
        }
        else {

        }
        if (Answer === 'afa0301cd1d191cbc5d47e5b661ef934') {
            setIscorrect(true)
        }
        else {
            setIscorrect(false)
            if(show.classList.contains('d-none')) {
                show.classList.toggle('d-none');
            }
            else {
                
            }
        }
    }

    return (
        <div>
            <Container style={{ marginTop: "10vh" }}>
                <Card color="default">
                    <Row justify="center" align="center">
                        <Text
                            h1
                            size={60}
                            css={{
                                textGradient: "45deg, $purple600 -20%, $pink600 100%",
                            }}
                            weight="bold"
                        >
                            First Mission
                        </Text>
                    </Row>
                    <Row justify="center" align="center">
                        <Text>จงเขียนโปรแกรมเพื่อคำนวณหาเลขฟีโบนันชีในลำดับที่ 499 คำตอบอยู่ในรูปแบบ md5</Text>
                    </Row>
                    <Spacer y={1}></Spacer>
                    <Row justify="center" align="center">
                        <Input onChange={handleChange} clearable placeholder="คำตอบของฟีโบนันชีลำดับที่ 499" />
                    </Row>
                    <Spacer y={1}></Spacer>
                    <Row justify="center" align="center">
                        <Button onPress={handleSubmit} color="secondary" auto>
                            ส่งคำตอบ
                        </Button>
                    </Row>
                    <div id="checkAnswer" className="d-none">
                        {
                            isCorrect ?
                                <div>
                                    <Spacer y={2}></Spacer>
                                    <Row justify="center" align="center">
                                        <Text
                                            h1
                                            size={30}
                                            css={{
                                                textGradient: "45deg, $purple600 -20%, $pink600 100%",
                                            }}
                                        >
                                            Your answer is correct
                                        </Text>
                                    </Row>
                                    <Row justify="center" align="center">
                                        <Button onPress={() => { window.open("http://localhost:3000/secondsomethingww_www_eiei") }} color="secondary" auto>
                                            ไปหน้าถัดไป
                                        </Button>
                                    </Row>
                                </div>
                                :
                                <div>
                                    <Spacer y={2}></Spacer>
                                    <Row justify="center" align="center">
                                        <Text
                                            h1
                                            size={30}
                                            css={{
                                                textGradient: "45deg, $purple600 -20%, $pink600 100%",
                                            }}
                                        >
                                            Your answer is not correct
                                        </Text>
                                    </Row>
                                </div>
                        }
                    </div>



                </Card>
            </Container>

        </div>
    )

}