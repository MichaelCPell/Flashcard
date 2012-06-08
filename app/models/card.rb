class Card < ActiveRecord::Base
  attr_accessible :back, :course_id, :front

  has_many :appearances
  has_many :cards, :through => :appearances
end
