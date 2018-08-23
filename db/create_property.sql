Insert Into Properties ( UserId, Name, Description, Address, City, State, Zip, Image, LoanAmount, MonthlyMortgage, Rent )
Values ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 );
RETURNING *;