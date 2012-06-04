class Deck < ActiveRecord::Base
  attr_accessible :course_id, :creator, :doc_type
end
