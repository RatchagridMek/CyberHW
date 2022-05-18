import React, { useState } from 'react'
import { Container, Card, Row, Text, Button } from "@nextui-org/react";
import { Input, Spacer } from "@nextui-org/react";
import akon from './akonnkonskonwkonekonr.txt'

export default function LastQuest() {

    const [Answer, setAnswer] = useState('')
    const [isCorrect, setIscorrect] = useState(false)

    const handleChange = (e) => {
        setAnswer(e.target.value)
    }

    const handleSubmit = () => {
        let show = document.getElementById('checkAnswer');
        if (show.classList.contains('d-none')) {
            show.classList.toggle('d-none');
        }
        else {

        }
        if ((parseInt(Answer) + 1 === parseInt(Answer) + 2) && Answer === '9007199254740991') {
            setIscorrect(true)
        }
        else {
            setIscorrect(false)
            if (show.classList.contains('d-none')) {
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
                            Third Mission
                        </Text>
                    </Row>
                    <Row justify="center" align="center">
                        <Text>ในทุกๆภาษาจะต้องมีค่าสูงสุดของตัวเลข"Integer"อยู่ ในJavasciptเองก็เหมือนกันลองค้นหาดูสิว่าเลขนั้นคือเลขอะไร</Text>
                    </Row>
                    <Spacer y={1}></Spacer>
                    <Row justify="center" align="center">
                        <Input onChange={handleChange} clearable placeholder="คำตอบของท่าน" />
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
                                        <Text
                                            h1
                                            size={30}
                                            css={{
                                                textGradient: "45deg, $purple600 -20%, $pink600 100%",
                                            }}
                                        >
                                            Congratulation your answer is in here!
                                        </Text>
                                    </Row>
                                    <Spacer y={1}></Spacer>
                                    <Row justify="center" align="center">
                                        <Button color="primary">
                                            <a href={akon} style={{ color: 'white' }} download>
                                                ดาวน์โหลดไฟล์
                                            </a>
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