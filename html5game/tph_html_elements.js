function _html_elements_create(type, id, parent, insert_after) {
  var element = document.createElement(type);
  element.setAttribute("id", id);

  if (parent) {
    if (insert_after) {
      document.getElementById(insert_after).insertAdjacentElement("afterend", element);
    } else {
      document.getElementById(parent).insertAdjacentElement("afterbegin", element)
    }
  } else {
    document.body.appendChild(element);    
  }

  return true;
}

function _html_elements_remove(id) {
  return document.getElementById(id) && document.getElementById(id).remove();
}

function _html_elements_set_property(id, key, value) {
  var element = document.getElementById(id);
  if (key === "content") {
    element.innerHTML = typeof value === "undefined" ? null : value;
    return true;
  }
  if (key.slice(0, 2) === "on" || key === "disabled") {
    if (typeof value === "undefined") {
      element.removeAttribute(key);
    } else {
      element.setAttribute(key, value);
    }
    return true;
  }
  element[key] = value;
  return true;
}

function _html_style_add(rule) {
  var sheet = document.styleSheets[0];
  sheet.insertRule(rule, 1);
}