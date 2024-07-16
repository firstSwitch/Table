function addTableRow() {
    var newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td><textarea required="" name="capability_commitments[capabilities][]"></textarea></td>
        <td>
            <select required="" name="capability_commitments[capabilities_types][]">
                <option></option>
                <option value="resource" class="select-label resource">Resource</option>
                <option value="competence" class="select-label competence">Competence</option>
                <option value="habit" class="select-label habit">Habit</option>
            </select>
        </td>
        <td><textarea required="" name="capability_commitments[action_plan][]"></textarea></td>
        <td><input required="" placeholder="yyyy-mm-dd" type="text" name="capability_commitments[start_dates][]"></td>
    `;

    document.querySelector("#capability_commitments_table tbody").appendChild(newRow);
    
    $("input[type='text']").datepicker({
        dateFormat: "yy-mm-dd"
    });
}

$(function() {
    $("input[type='text']").datepicker({
        dateFormat: "yy-mm-dd"
    });
});
