import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="completed" title="Completed"></assignment-list>
        </section>
    `,

    data () {
        return {
            assignments: [
                { name: "Finish project", complete: false, id: 1},
                { name: "Read Chapter 8", complete: false, id: 2},
                { name: "Submit homework", complete: false, id: 3},
            ]
        }
    },

    computed: {
        
        inProgress() {
            return this.assignments.filter(assignment => ! assignment.complete);
        },

        completed() {
            return this.assignments.filter(assignment => assignment.complete);
        }
    }

}