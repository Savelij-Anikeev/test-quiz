import { makeAutoObservable } from "mobx";
import { TestType } from "../types";

import tests from '../data/quiz';


class ModalStore {
    // isOpen: if it's true - modal is active
    // currentTest: test that was selected, when modal was opening
    isOpen: boolean = false;
    currentTest: TestType | undefined = tests[0];

    constructor() {
        makeAutoObservable(this);
    }

    closeModal() {
        // closing modal
        this.isOpen = false;
        this.currentTest = undefined;
    }
    openModal(title: string) {
        // opening modal and selecting currentTest by title
        // title relates to the Test
        // trying to find test with title
        this.currentTest = tests.find(test => test.title === title);
        this.isOpen = true;
    }
}

export default new ModalStore();