package entity 
 
import ( 
    "gorm.io/gorm" 
) 
 
type Customer struct { 
    gorm.Model 
    FirstName string    `json:"first_name"` 
    LastName  string    `json:"last_name"` 
    Email     string    `json:"email"` 
    Password  string    `json:"-"`
	Contact  string    `json:"contact"`
	Profile   string `gorm:"type:longtext"`
} 