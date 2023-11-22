import {useState} from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'

export function Feedback({value}){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");
    const [userFeedback, setUserFeedback] = useState([]);
    
    const details = {
        name,
        email,
        msg
    }

    const handleSubmit = () => {
        setUserFeedback([...userFeedback, details])
        value.onClose();
    }

    return (
        <Modal isOpen={value.isOpen} onClose={value.onClose} >
                <ModalOverlay />
                <ModalContent bg="#ed462f" color="white">
                <ModalHeader>Help us Improve!</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Your feedback is appreciated and instrumental in making Jhatkaa.org better. You can use this form to send us any inputs, comments, suggestions or questions about this new website.
                </ModalBody>
                <FormControl p={4}>
                    <FormLabel>Your Name*</FormLabel>
                    <Input type='text' value={name} onChange={(event)=>setName(event.target.value)}/>
                    <FormLabel>Your Email Address*</FormLabel>
                    <Input type='email' value={email} onChange={(event)=>setEmail(event.target.value)} isRequired/>
                    <FormLabel>Message</FormLabel>
                    <Input type='msg' value={msg} onChange={(event)=>setMsg(event.target.value)}/>                  
                </FormControl>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                        Send Feedback
                    </Button>
                </ModalFooter>
                </ModalContent>
        </Modal>
    )
}