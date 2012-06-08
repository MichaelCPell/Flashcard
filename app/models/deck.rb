class Deck < ActiveRecord::Base
  attr_accessible :course_id, :creator, :doc_type, :cards_attributes, :name
  has_many :cards, :through => :appearances
  has_many :appearances
  belongs_to :course

  accepts_nested_attributes_for :cards, allow_destroy: true

  validates_presence_of :name, :course_id


end
