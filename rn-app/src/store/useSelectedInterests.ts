import create from "zustand";
interface InterestState {
  selectedInterests: string[];
  updateInterests: (interest: string) => void;
  removeInterests: (interest: string) => void;
}

export const useSelectedInterests = create<InterestState>()(set => ({
  selectedInterests: [],
  updateInterests: interest =>
    set(state => ({
      selectedInterests: [...state.selectedInterests, interest],
    })),
  removeInterests: interest =>
    set(state => ({
      selectedInterests: state.selectedInterests.filter(
        item => item !== interest
      ),
    })),
}));
