import { useState } from "react";
import Button from "./Button.jsx";
import styles from "./Calculator.module.css";
import Field from "./Field.jsx";

const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default function Calculator() {
    const [ firstOperand, setFirstOperand ] = useState(null);
    const [ setSecondOperand ] = useState(null);
    const [ field, setField ] = useState("");
    const [operator, setOperator] = useState(null);

    const handleChange = (event) => {
        setField(event.target.value);
    };

    const putNumber = (value) => {
        setField((prev) => prev + value);
    };

    const clean = () => {
        setField("");
        setFirstOperand(null);
        setSecondOperand(null);
    };

    const chooseOperator = (operator) => {
        setFirstOperand(Number(field));
        setOperator(operator);
        setField("");
    };

    const calculate = () => {
        const secondOperand = Number(field);

        if (operator === "+") {
            setField(firstOperand + secondOperand);
        } else {
            setField(firstOperand - secondOperand);
        }

        setOperator(null);
        setFirstOperand(null);
    };

    return (
        <div className={styles.container}>
            <div className={styles.buttonsContainer}>
                <Field value={field} onInput={handleChange} className={styles.input} />
                {NUMS.map((element) => {
                    return (
                        <Button
                            onClick={putNumber}
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

