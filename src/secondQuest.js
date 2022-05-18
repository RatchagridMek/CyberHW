import React, { useState } from 'react'
import { Container, Card, Row, Text, Button } from "@nextui-org/react";
import { Input, Spacer } from "@nextui-org/react";
import codeFile from './chick-chuckCode.txt'

export default function SecondQuest() {
    // Secret code : Wongyos Nunthapiwat
    const [text, setText] = useState('จบแล้วจ้า KMUTTCTF')
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
        if (Answer === 'KMUTTCTF{79406892e491028284d98465fcd58eef}') {
            setIscorrect(true)
            setTimeout(() => {
                setText('Secret code : Wongyos Nunthapiwat');
            },10000)
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
                            Second Mission
                        </Text>
                    </Row>
                    <Spacer y={1}></Spacer>
                    <Row justify="center" align="center">
                        <Text>ในเหล่านักศึกษาวิทยาการคอมพิวเตอร์มีเทรนด์คำพูดใหม่ที่เอาไว้คุยกันโดยจะมีแค่คำว่า chick chuck โดยคนที่รู้ความหมายของมันมีแค่คนที่อยู่ในกลุ่มเท่านั้นจงพยายามถอดความหมายของ
                            "chick chuck" ให้ได้แล้วอาจจะได้รู้ความลับบางอย่างก็เป็นได้</Text>

                    </Row>
                    <Spacer y={1}></Spacer>
                    <Row justify="center" align="center">
                        <Button color="primary">
                            <a href={codeFile} style={{color: 'white'}} download>
                                ดาวน์โหลดไฟล์
                            </a>
                        </Button>
                    </Row>
                    <Spacer y={1}></Spacer>
                    <Row justify="center" align="center">
                        <Input onChange={handleChange} clearable placeholder="คำตอบข้อนี้" />
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
                                        <Text>{text}</Text>
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