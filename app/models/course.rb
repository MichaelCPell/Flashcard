class Course < ActiveRecord::Base
  attr_accessible :name, :card_attributes

  has_many :decks
end
