import { useState } from "react";
import Button from "./Button.jsx";
import styles from "./Calculator.module.css";
import Field from "./Field.jsx";

const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default function Calculator() {
    const [ firstOperand, setFirstOperand ] = useState(null);
    const [ field, setField ] = useState("");
    const [operator, setOperator] = useState(null);
    const [isResult, setIsResult] = useState(false);

    const handleChange = (event) => {
        setField(event.target.value);
    };

    const putNumber = (value) => {
        setField((prev) => prev + value);
    };

    const clean = () => {
        setField("");
        setFirstOperand(null);
        setOperator(null);
    };

    const chooseOperator = (operator) => {
        if (field === "") return;
        setFirstOperand(Number(field));
        setOperator(operator);
        setField("");
        setIsResult(false);
    };

    const calculate = () => {
        if (operator === null || firstOperand === null || field === "") {
            return;
        }
        const secondOperand = Number(field);
        let result;

        if (operator === "+") {
            setField((result = firstOperand + secondOperand));
        } else {
            setField((result = firstOperand - secondOperand));
        }
        setField(String(result));
        setOperator(null);
        setFirstOperand(null);
        setIsResult(true);
    };

    return (
        <div className={styles.container}>
            <div className={styles.buttonsContainer}>
                <Field
                    value={field}
                    onInput={handleChange}
                    className={`${styles.input} ${isResult ? styles.colorResult : ""}`}
                />
                {NUMS.map((element) => {
                    return (
                        <Button
                            onClick={() => putNumber(element)}
                            key={element}
                            value={element}
                            className={`${styles.button} ${styles.buttonNumbers}`}
                        >
                            {element}
                        </Button>
                    );
                })}
                <Button onClick={calculate} className={styles.button}>
                    =
                </Button>
                <Button onClick={() => chooseOperator("+")} className={styles.button}>
                    +
                </Button>
                <Button onClick={() => chooseOperator("-")} className={styles.button}>
                    -
                </Button>
                <Button onClick={clean} className={`${styles.button} ${styles.buttonClean}`}>
                    clean
                </Button>
            </div>
        </div>
    );
}

