import { makeAutoObservable } from "mobx";

import { TestCategory, TestDifficulty } from '../../app/types';


class FilterStore {
    categoryFilters: TestCategory[] | undefined;
    difficultyFilters: TestDifficulty[] | undefined;
    currentCategoryFilter: TestCategory | undefined;
    currentDifficultyFilter: TestDifficulty | undefined;

    constructor() {
        makeAutoObservable(this);
        this.initializeStates();
    }

    initializeStates() {
        // getting all values from enums
        this.categoryFilters = Object.values(TestCategory);
        this.difficultyFilters = Object.values(TestDifficulty);
    }

    setCategoryFilter(value: TestCategory) {
        this.currentCategoryFilter = value;
    }

    setDifficultyFilter(value: TestDifficulty) {
        this.currentDifficultyFilter = value;
    }

}

export default new FilterStore();