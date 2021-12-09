import React from 'react';
import { useContract } from "../hooks/useContract";
import { Container, Row, Col, Alert } from "react-bootstrap";

type Props = {
    currentAccount?: string
}

const Collection: React.FC<Props> = ({ currentAccount }) => {
    const { tokenList } = useContract(currentAccount);
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col lg={6}>
                    {tokenList && tokenList.length === 0 &&
                    <Alert variant="warning">You don't have any token yet!</Alert>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Collection;