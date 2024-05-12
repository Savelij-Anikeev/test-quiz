import { makeAutoObservable } from "mobx";

import { TestCategory, TestDifficulty, TestType } from "../types";

import tests from "../data/quiz";

import filterStore from "./filterStore";


class TestStore {
    // getting tests from local file 'cause we do not have backend
    tests: TestType[]= tests;

    constructor() {
        makeAutoObservable(this);
    }

    getFilteredTests(
        catFilter: TestCategory | undefined = filterStore.currentCategoryFilter, 
        diffFilter: TestDifficulty | undefined = filterStore.currentDifficultyFilter
    ) {
        // returns filtered tests
        let result: TestType[] = this.tests;

        return result.filter(test => {
            // going over each test and filtering it
            // checking if filter is defined and if it is
            // checking bad case (if condition is not satisfied)
            if (catFilter){
                if (test.category !== catFilter) return false;
            }
            if (diffFilter){
                if (test.difficulty !== diffFilter) return false;
            }

            // return true if all conditions are satisfied
            return true;
        });
    }
}

export default new TestStore();