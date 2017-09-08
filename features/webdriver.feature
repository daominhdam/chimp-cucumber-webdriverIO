Feature: 

  As a developer
  I want to have webdriver available to me in my steps
  So that I don't have to configure my world object and I focus on testing
  
	Scenario: Visit Contacts page in PROD
		Given I visit "https://sbis.ru"
		And I click on the button ".sbis_ru-Header__menu > a:nth-child(5)"
		Then I expect that element ".sbis_ru-header-h2" matches the text "КОНТАКТЫ"
		And I expect that element ".sbis_ru-salesPoints__regionChooser" matches the text "Ярославская обл."
		And I expect that element "#city-1" matches the text "Ярославль"


	Scenario: Visit Contacts FIX
		Given I visit "https://fix.sbis.ru"
		And I click on the button ".sbis_ru-Header__menu > a:nth-child(5)"
		Then I expect that element ".sbis_ru-header-h2" matches the text "КОНТАКТЫ"
		And I expect that element ".sbis_ru-salesPoints__regionChooser" matches the text "Ярославская обл."
		And I expect that element "#city-1" matches the text "Ярославль"

	Scenario: Visit Contacts TEST
		Given I visit "https://test.sbis.ru"
		And I click on the button ".sbis_ru-Header__menu > a:nth-child(5)"
		Then I expect that element ".sbis_ru-header-h2" matches the text "КОНТАКТЫ"
		And I expect that element ".sbis_ru-salesPoints__regionChooser" matches the text "Ярославская обл."
		And I expect that element "#city-1" matches the text "Ярославль"

	Scenario: Visit Contacts PRE-TEST
		Given I visit "https://pre-test.sbis.ru"
		And I click on the button ".sbis_ru-Header__menu > a:nth-child(5)"
		Then I expect that element ".sbis_ru-header-h2" matches the text "КОНТАКТЫ"
		And I expect that element ".sbis_ru-salesPoints__regionChooser" matches the text "Ярославская обл."
		And I expect that element "#city-1" matches the text "Ярославль"
	
	
	@watch
	Scenario: Change region in contacts page in PROD		
		Given I visit "https://sbis.ru/contacts"
		And I expect that element "#city-1" matches the text "Ярославль"
		And I click on the button ".sbis_ru-salesPoints__regionChooser"
		And I click on the button ".sbis_ru-ChooserPanel__listContainer>div>div:nth-child(3)>span"
		Then I expect that element "#city-1" matches the text "Майкоп"
		
	Scenario: Change region in contacts page in FIX		
		Given I visit "https://fix.sbis.ru/contacts"
		And I expect that element "#city-1" matches the text "Ярославль"
		And I click on the button ".sbis_ru-salesPoints__regionChooser"
		And I click on the button ".sbis_ru-ChooserPanel__listContainer>div>div:nth-child(3)>span"
		Then I expect that element "#city-1" matches the text "Майкоп"
		
	Scenario: Change region in contacts page in TEST		
		Given I visit "https://test.sbis.ru/contacts"
		And I expect that element "#city-1" matches the text "Ярославль"
		And I click on the button ".sbis_ru-salesPoints__regionChooser"
		And I click on the button ".sbis_ru-ChooserPanel__listContainer>div>div:nth-child(3)>span"
		Then I expect that element "#city-1" matches the text "Майкоп"
		
	Scenario: Change region in contacts page in PRE-TEST		
		Given I visit "https://pre-test.sbis.ru/contacts"
		And I expect that element "#city-1" matches the text "Ярославль"
		And I click on the button ".sbis_ru-salesPoints__regionChooser"
		And I click on the button ".sbis_ru-ChooserPanel__listContainer>div>div:nth-child(3)>span"
		Then I expect that element "#city-1" matches the text "Майкоп"