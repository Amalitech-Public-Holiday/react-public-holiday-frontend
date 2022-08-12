const DashboardForm = () => {
    return (
      <div>
        <select name="country">
          <option value="" selected>All countries</option>
          <option value="GH">Ghana</option>
          <option value="DE">Germany</option>
          <option value="RW">Rwanda</option>
        </select>
        <select name="year">
          <option value="2022" selected>2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
        <select name="month">
          <option value="" selected>Any month</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
    );
}

export default DashboardForm;